import { Component, Input } from '@angular/core';

@Component({
  selector: 'assemblyline',
  templateUrl: './assemblyline.component.html',
  styleUrls: ['./assemblyline.component.css']
})
export class AssemblyLineComponent {
  @Input() stages: string[];
  newItemText: string = '';
  internalStages: { name: string; items: string[] }[] = [];

  constructor() {}

  ngOnInit() {
    this.internalStages = this.stages.map((stageName) => ({
      name: stageName,
      items: []
    }));
  }

  addItem() {
    if (this.newItemText !== '') {
      this.internalStages[0].items.unshift(this.newItemText);
      this.newItemText = '';
    }
  }

  moveItemForward(stage: { name: string; items: string[] }, itemIndex: number) {
    const item = stage.items.splice(itemIndex, 1)[0];
    if (stage === this.internalStages[this.internalStages.length - 1]) {
      return;
    }
    const nextStage = this.internalStages[
      this.internalStages.indexOf(stage) + 1
    ];
    nextStage.items.unshift(item);
  }

  moveItemBackward(stage: { name: string; items: string[] }, itemIndex: number) {
    const item = stage.items.splice(itemIndex, 1)[0];
    if (stage === this.internalStages[0]) {
      return;
    }
    const previousStage = this.internalStages[
      this.internalStages.indexOf(stage) - 1
    ];
    previousStage.items.push(item);
  }
}
