import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], filterText: string): any {
    return list
      ? filterText
        ? list.filter((item) =>
            (item.nomPlat || item.nomProduit || '')
              .toLowerCase()
              .includes(filterText.toLowerCase())
          )
        : list
      : [];
  }
}
