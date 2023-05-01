export const html = (raw: string): Element => {
  const parser = new DOMParser();

  const parserd = parser.parseFromString(raw, "text/html").body
    .firstElementChild!;

  return parserd;
};
