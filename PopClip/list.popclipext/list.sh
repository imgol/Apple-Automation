result=$(echo "$POPCLIP_TEXT"|tr -d '\n'|gsed 's/^（.）/- / ; s/^.\( \|\.\|\、\|[0-9]\)/- /; s/-  /- / ; /^-/! s/^/- /')
/bin/echo -n "$result"
