json.array!(@tags) do |tag|
  json.partial!('tags', tag: tag)
end
