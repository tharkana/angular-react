import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CustomReactComponent } from './CustomReactComponent';


const containerElementName = 'customReactComponentContainer';

@Component({
    selector: 'app-my-component',
    template: `<span #${containerElementName}></span>`,
    // styleUrls: [''],
    encapsulation: ViewEncapsulation.None,
})
export class CustomReactComponentWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, { static: true }) containerRef!: ElementRef;

    @Input() public counter = 10;
    @Input() public text = '';
    @Output() public textChange = new EventEmitter<string>();

    @Output() public componentClick = new EventEmitter<void>();

    constructor() {
        this.handleDivClicked = this.handleDivClicked.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    public handleDivClicked() {
        if (this.componentClick) {
            this.componentClick.emit();
            this.render();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.render();
    }

    ngAfterViewInit() {
        this.render();
    }

    ngOnDestroy() {
        ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    }

    onTextChange(changeText: any) {
        if (this.textChange) {
            this.textChange.emit(changeText);
            // this.render();
        }
    }

    private render() {
        const { counter, text } = this;

        ReactDOM.render(
            <React.StrictMode>
                <div>
                    <CustomReactComponent onTextChange={this.onTextChange} text={text} counter={counter} onClick={this.handleDivClicked} />
                </div>
            </React.StrictMode>
            , this.containerRef.nativeElement);
    }
}
