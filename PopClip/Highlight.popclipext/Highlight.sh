result=$(echo "$POPCLIP_TEXT"|gsed 's/^[[:space:]]*// ; s/[[:space:]]*$// ; s/\*\*/::/g ; /^- / s//- ::/ ; /^- ::/ s/$/::/ ; /::/! s/^/::/ ; /^::/ s/$/::/ ;s/\(::\)\(.*\)\(::::\)\(.*\)\(::\)/::\2\4::/ ; s/:: ::$/::/g ; /^::$/ s/.*//')
/bin/echo -n "$result"
