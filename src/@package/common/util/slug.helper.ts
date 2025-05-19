import slugify from "slugify";

export class SlugHelper {
  static generate(text: string): string {
    const result = `${slugify(text, {
      lower: true,
    })}`;
    return result;
  }
}
