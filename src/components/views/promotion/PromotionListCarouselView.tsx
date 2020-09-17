import React from 'react';

import { Avatar, Button, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';

import SwipeableTextMobileStepperView from '../common/steps/SwipeableTextMobileStepperView';
import { LinkType, SwipeableStepInfo, StepDetailedDialogCreator } from '../common/steps/SwipeableTextMobileStepperView';

const testSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

interface PromotionListCarouselViewProps {
  
}

interface PromotionListCarouselViewState {
  steps: SwipeableStepInfo[]
}

class PromotionListCarouselView extends React.Component<PromotionListCarouselViewProps, PromotionListCarouselViewState> {

  constructor(props: PromotionListCarouselViewProps) {
    super(props);

    var temp: SwipeableStepInfo[] = [];

    testSteps.map((value, index) =>{
      var label = value.label;
      var imgPath = value.imgPath;

      var step: SwipeableStepInfo = {
        id: "id-" + index,
        label: label,
        imgPath: imgPath,
        linkType: LinkType.Popup,
        stepDetailedDialogCreator: this.createSampleDialog
      }
      temp.push(step);
    })

    this.state = {
      steps: temp
    }

    this.createSampleDialog = this.createSampleDialog.bind(this);
  }

  createSampleDialog = (contentId: string): any => {
    return (
     <div>KKKKKKKKKKK</div>
    );
  }

  render() {
    return(
      <SwipeableTextMobileStepperView title="Promotion List" steps={ this.state.steps }/>
    );
  }
}

export default PromotionListCarouselView;