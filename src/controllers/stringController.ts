export interface ConcatStringsFn { (str1: string, str2: string): string }

export const concatStrings: ConcatStringsFn = (str1, str2) => str1 + str2;
