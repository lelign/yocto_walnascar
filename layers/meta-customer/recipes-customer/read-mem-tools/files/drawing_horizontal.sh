#!/bin/sh

# Check if row number is provided
if [ -z "$1" ]; then
    echo "Error: Please specify a row number from 0 to 1079."
    echo "Usage example: $0 5"
    exit 1
fi

# Input row number (0 to 1079)
ROW=$1

# Validate row range
if [ "$ROW" -lt 0 ] || [ "$ROW" -ge 1080 ]; then
    echo "Error: Row number must be in the range of 0 to 1079."
    exit 1
fi

# Base start address of the matrix (Row 0)
BASE_START=1056964608  # 0x3F000000 in decimal

# Configuration parameters for byte-wise write
TARGET_WRITES=5760
STEP=1
ROW_BYTES=$((TARGET_WRITES * STEP)) # 5760 bytes step between rows

# Calculate start address for the selected row
START_ADDR=$((BASE_START + ROW * ROW_BYTES))

# End address for exactly 5760 byte-wise writes
END_ADDR=$((START_ADDR + (TARGET_WRITES - 1) * STEP))

echo "Writing row $ROW (BYTE-BY-BYTE). Address range: $(printf "0x%X" $START_ADDR) -> $(printf "0x%X" $END_ADDR)"

# Initialize write counter
count=0

# Address writing loop
addr=$START_ADDR
while [ "$addr" -le "$END_ADDR" ]; do
    HEX_ADDR=$(printf "0x%X" $addr)
    
    # Write ONE byte ('b' argument instead of 'w', value 0xff)
    devmem2 "$HEX_ADDR" b 0xff > /dev/null
    
    # Increment address and write counter
    addr=$((addr + STEP))
    count=$((count + 1))
done

echo "Row $ROW successfully written. Total byte writes performed: $count"