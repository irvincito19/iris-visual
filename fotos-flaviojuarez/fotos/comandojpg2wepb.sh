for img in *.jpg; do
  cwebp "$img" -o "${img%.jpg}.webp"
done
