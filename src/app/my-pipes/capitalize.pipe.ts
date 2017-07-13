import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    // in a template you use the pipe like this:
    // {{ userName | capitalize }}
    //                   |
    //       -------------
    //       |
  name: 'capitalize'
    // the "name" setting specifies how to use it
})
export class CapitalizePipe implements PipeTransform {
    // The logic of our pipe goes inside the "transform()" method.

    // "new york" -> "New York"
    // {{ "new york city" | capitalize }}
    //        |
  transform(value: any, args?: any): any {
      // the value variable is the thing that you are modifying
      // (the thing on the left of the "|")

        // value = "new york city"

      // break the string into an array of words
      const wordsArray = value.split(' ');
        // wordsArray = [ "new", "york", "city" ]

      // capitalize the pieces
      let capitalizedWords = wordsArray.map((oneWord) => {
              // oneWord = "city"

          const capped = oneWord[0].toUpperCase() + oneWord.slice(1).toLowerCase();
              //                "c".toUpperCase() +            "ity".toLowerCase()

          if (capped === 'York') {
            return 'Yolk';
          }
          else {
            return capped;
          }
      });
        // capitalizedWords = [ "New", "Yolk", "City" ]

      // join the capitalized pieces together with a space in between
      return capitalizedWords.join(' ');
        // "New Yolk City"
  }

}
