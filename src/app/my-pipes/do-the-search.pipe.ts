import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doTheSearch'
})
export class DoTheSearchPipe implements PipeTransform {

    // *ngFor="let oneRock of (theRocks | doTheSearch:'fast')"
    // value = theRocks
    // searchTerm = "fast"  (the value of the input, rockSearchText)
  transform(value: any, searchTerm: string): any {
      // if the array is undefined or something weird return EMPTY array
      if (!value) {
        return [];
      }

      // if no search term is provided return the ORIGINAL array
      if (!searchTerm) {
        return value;
      }

      let matchedResults = [];

      // lower case the search term so that it works for all cases
      searchTerm = searchTerm.toLowerCase();

      value.forEach((oneItem) => {
          // lower case the name so that it works for all cases
          // if the name has the search term in it, push it to the new array.
          if (oneItem.name.toLowerCase().includes(searchTerm)) {
            matchedResults.push(oneItem);
          }
      });

      return matchedResults;
  }

}
