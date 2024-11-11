import { NgModule } from '@angular/core';

import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxCheckboxModule } from '@aposin/ng-aquila/checkbox';
import { NxExpertModule } from '@aposin/ng-aquila/config';
import { NxCopytextModule } from '@aposin/ng-aquila/copytext';
import { NxDocumentationIconModule } from '@aposin/ng-aquila/documentation-icons';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxMessageModule } from '@aposin/ng-aquila/message';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { NxOverlayModule } from '@aposin/ng-aquila/overlay';
import { NxPopoverModule } from '@aposin/ng-aquila/popover';
import { NxSmallStageModule } from '@aposin/ng-aquila/small-stage';

@NgModule({
  exports: [
    NxButtonModule,
    NxCheckboxModule,
    NxDocumentationIconModule,
    NxDropdownModule,
    NxFooterModule,
    NxFormfieldModule,
    NxGridModule,
    NxHeadlineModule,
    NxIconModule,
    NxInputModule,
    NxLinkModule,
    NxMessageModule,
    NxModalModule,
    NxOverlayModule,
    NxPopoverModule,
    NxSmallStageModule,
    NxCopytextModule,
    NxExpertModule,
  ],
})
export class StarterModule {}

/**  Copyright APOSIN 2022 */
