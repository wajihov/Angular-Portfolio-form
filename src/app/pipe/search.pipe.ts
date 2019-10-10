import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilterPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any {
    if (!items || !searchTerm) {
      return items;
    }
    return (items.filter(ps => (ps.prenom.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || ps.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));
  }
}
