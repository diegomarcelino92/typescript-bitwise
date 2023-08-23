// hashing djb2
function hashdjn2(str: string) {
  let hash = 5381;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) + hash + char;
  }

  return hash;
}
