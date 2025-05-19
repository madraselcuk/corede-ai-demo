export class RegexHelper {
  static beginsWithTextRegex(text: string): RegExp {
    return new RegExp('^' + text, 'i');
  }
  
  static containsTextRegex(text: string): RegExp {
    return new RegExp(text, 'i');
  }
}
