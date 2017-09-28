import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouchspinDirective } from './touchspin.directive';
import { FlexLabelsDirective } from './flex-labels.directive';
import { MaskInputDirective } from './mask-input.directive';
import { AutoCompleteDirective } from './auto-complete.directive';
import { SelectTagsDirective } from './select-tags.directive';
import { SelectableDirective } from './selectable.directive';
import { TooltipDirective } from './tooltip.directive';
import { AutoHeightDirective } from './auto-height.directive';
import { ScrollableDirective } from './scrollable.directive';
import { ElementHeightDirective } from './element-height.directive';
import { DatepickerDirective } from './datepicker.directive';
import { PopoverDirective } from './popover.directive';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TouchspinDirective,
    FlexLabelsDirective,
    MaskInputDirective,
    AutoCompleteDirective,
    SelectTagsDirective,
    SelectableDirective,
    TooltipDirective,
    AutoHeightDirective,
    ScrollableDirective,
    ElementHeightDirective,
    DatepickerDirective,
    PopoverDirective,
    CommentComponent
  ],
  exports: [
    TouchspinDirective,
    FlexLabelsDirective,
    MaskInputDirective,
    AutoCompleteDirective,
    SelectTagsDirective,
    SelectableDirective,
    TooltipDirective,
    AutoHeightDirective,
    ScrollableDirective,
    ElementHeightDirective,
    DatepickerDirective,
    PopoverDirective,
    CommentComponent
  ]
})
export class SharedModule { }
