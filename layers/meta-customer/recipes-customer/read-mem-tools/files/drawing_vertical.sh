#!/bin/sh

# Base configuration
START_ADDR=1056964608  # 0x3F000000
WIDTH=1920
BPP=3
STRIDE=$((WIDTH * BPP)) # 5760 bytes per row

# We will draw a vertical line at X = 10 (10th pixel from the left)
# For rows 0, 1, 2, 3, 4
X=960

echo "Drawing an absolute vertical line for rows 0-4 at X=$X..."

row=0
while [ $row -lt 500 ]; do
    # Calculate exact address for pixel (row, X)
    PIXEL_ADDR=$(( START_ADDR + (row * STRIDE) + (X * BPP) ))
    HEX_ADDR=$(printf "0x%X" $PIXEL_ADDR)
    
    echo "Row $row: Writing pixel at $HEX_ADDR"
    
    # Write 3 bytes of white color (0xFF, 0xFF, 0xFF)
    devmem2 "$HEX_ADDR" b 0xff > /dev/null
    devmem2 $(printf "0x%X" $((PIXEL_ADDR + 1))) b 0xff > /dev/null
    devmem2 $(printf "0x%X" $((PIXEL_ADDR + 2))) b 0xff > /dev/null
    
    row=$((row + 1))
done

echo "Done! Check your monitor."
