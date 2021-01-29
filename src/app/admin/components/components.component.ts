import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TagInterface } from 'src/app/core/interfaces/tag.interface';
import { TagGetService } from 'src/app/core/services/tagGet.service';

@Component({
  selector: 'app-main',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  private tagsList: TagInterface[];
  public displayedColumns: string[] = ['name', 'iteration'];

  public displayedTags: MatTableDataSource<TagInterface>;

  constructor(
    private tagService: TagGetService
  ) {}

  ngOnInit() {
    this.tagService.get().subscribe((res: any[]) => {
      let tempTagsList = [];
      res.forEach(resTag => {
        tempTagsList.push({
          id: resTag.id,
          name: resTag.name,
          type: resTag.type,
          iteration: resTag.iteration,
          created: new Date(resTag.created.toString())
        });
      });
      tempTagsList = tempTagsList.sort((a, b) => {
        return - (a.iteration - b.iteration);
      });
      console.log('tags :', tempTagsList);
      this.tagsList = tempTagsList;
      this.displayedTags = new MatTableDataSource(tempTagsList);
      this.displayedTags.sort = this.sort;
      this.displayedTags.paginator = this.paginator;
    });

  }

  public async search(event: any) {
    const input = event.target.value;
    const tempTagsList = [];
    this.tagsList.forEach(tag => {
      if (tag.name.includes(input)) {
        tempTagsList.push(tag);
      }
    });
    this.displayedTags.data = tempTagsList;

  }

}
