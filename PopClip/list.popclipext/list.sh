result=$(printf "$POPCLIP_TEXT"|gsed 's/^（.*）/- / ; s/^\([0-9][0-9]\|[0-9]\|.\)\( \|\.\|．\|、\|，\|\)/- / ; s/^-  /- /')
/bin/echo -n "$result"
