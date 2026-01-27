#!/bin/bash
############# u_boot ################ Arria 10 SoC - Boot from SD Card
clear; home=$('pwd'); title=$(date "+%d-%B_%H_%M_%S_ask") #; echo $title > $home/log | tee $home/u-boot.log

# find path to Quartus project and add it to array possible_path()
	possible_path=() 
	for q in $(lsblk --pairs | grep 'RM="0"' | grep -v 'MOUNTPOINTS=""' | grep -v loop | grep -v "/boot/efi" | cut -d '"' -f 14); do
		if [ $q == "/" ]; then
			this_path="/home/$(whoami)"
		else
			this_path="$q"
		fi
		if [[ (-d "$this_path") && ("$this_path" != *"old_"*) && ("$this_path" != *"lost+found") ]]; then
			cd $this_path
			for file in $(find ./ -maxdepth 5 -type f -name 'hps.xml'); do
				if [[ -f $file ]]; then
					hps_isw_handoff=$(basename $(dirname $file))
					project_name=$(basename $(dirname $(dirname $file)))
					project_path=$(realpath $(dirname $(dirname $file)))
					output_files=$(realpath "$project_path/output_files")
					if [ -d $output_files ]; then
						sof=$(find $output_files -maxdepth 1 -type f -name "*.sof")
						if [ -f $sof ]; then
								possible_path+=("$project_name $project_path")
						fi
					fi
				fi
			done
		fi
	done
#
# Quartus project choice
count=0
echo -e "\tВыберите проект Quartus (ввести номер)\n"

    n_1="№  "; n_2="имя проекта Quartus"; n_3="дата создания"
    printf "\t%-3s | %-60s | %-10s\n" "$n_1" "$n_2" "$n_3"
    SYMBOL='='
    printf "\t%-3s | %-50s | %-14s\n" | tr ' ' "$SYMBOL"
    for el in "${possible_path[@]}"; do
        name_pr=$(echo $el | cut -d " " -f 1)
        date_pr=$(date -r $(echo $el | cut -d " " -f 2) +"%m-%d %H:%M:%S")
        #echo -e "$count\t$el"
        printf "\t%-3s | %-50s | %-10s\n" "$count" "$name_pr" "$date_pr"
        ((count+=1))
    done
    #echo -e "\n\tНомер проекта ?"
    read -p $'\n\t'"Номер проекта Quartus? : " pr_num
    #if  [[ "$pr_num" =~ ^[0-"$count"]+$ ]]; then
    if  [[ "$pr_num" =~ ^[0-9]+$ && $pr_num -le $count ]]; then
        project="${possible_path[$pr_num]}"
        name_pr=$(echo $project | cut -d " " -f 1)
        echo -e "\n\tвыбран $pr_num\t$project" | tee -a $home/log
        project=$(echo $project | cut -d " " -f 2)
    else
        echo -e "\n\tError : ошибка выбора проекта $pr_num <= ??? \n\texit..."
        exit
    fi
#
 cd $home
# qts-filter-a10.sh
echo -e "\n\tproject: $project\n" | tee -a $home/log
hps_isw_handoff_dir="$project/hps_isw_handoff"
if [[ -d "$hps_isw_handoff_dir" && -f "$hps_isw_handoff_dir/hps.xml" ]]; then
    rm -f hps.xml
    ln -s $hps_isw_handoff_dir/hps.xml $(pwd)/hps.xml 
    #echo $(file $(pwd)/hps.xml )
else
    echo -e "\n\tError : directory hps_isw_handoff on path $hps_isw_handoff not found !"
    echo -e "\texit ..."
    exit
fi
# generate core && rbf
	if [ -d "$project/output_files" ]; then
        output_files=$project/output_files
		#    sof_file=$(find $(realpath $output_files) -maxdepth 1 -type f -name *.sof)
		sof_file=$(find "$output_files" -maxdepth 1 -type f -name *.sof)
		quartus=$(find /home/$(whoami) -maxdepth 3 -type d -name "quartus")
		if [ ! -d "$quartus" ]; then
			quartus=$(find /home/$(whoami)/Quartus/ -maxdepth 3 -type d -name "quartus" | grep "Quartus_pro_21_4/quartus")
			if [ ! -d "$quartus" ]; then
				echo -e "Quartus not found!!!"
				exit
			fi
		fi 
		quartus_cpf=$quartus/bin/quartus_cpf
		if [[ -f $sof_file && -f $quartus_cpf ]]; then
			flags="-c --hps -o bitstream_compression=on "
			output_rbf=$title
			output_rbf+=".rbf"
			output_rbf=$output_files/$output_rbf		
			$quartus_cpf $flags $sof_file $output_rbf # convert sof to core $ periph .rbf
		else
			echo -e "Error : quartus_cpf on path $quartus_cpf not found or file  .sof doesn't exist in $output_files!"
			exit
		fi
	else
		echo -e "Error : directory output_files on path $output_files not found or file  .sof doesn't exist in it!"
		exit
	fi
	#### check core && periph && ln them
	core=$title
	core+=".core.rbf"
	periph=$title
	periph+=".periph.rbf"
	if [[ -f $output_files/$core &&  -f $output_files/$periph ]]; then
		#cd ../../../output_files
		rm -rf core.rbf
		rm -rf periph.rbf
		ln -s $output_files/$core core.rbf
		ln -s $output_files/$periph periph.rbf		
	else
		echo -e "Error : file $core or file $periph on path $output_files not found !"
	fi
    if [[ -f hps.xml &&  -f core.rbf && -f periph.rbf ]]; then
        echo -e "\n\t\tSUCCESS\n"
    else
        echo -e "\n\t\tSOMTHING WRONG !!!\n"
    fi