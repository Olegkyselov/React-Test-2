import * as React from 'react';
import classnames from 'classnames';
import { Button, Popover, PopoverBody, PopoverHeader } from 'reactstrap';

import { InfoTabsProps } from './interfaces';

export function InfoTabs({ advice } : InfoTabsProps) {
  const [isWhenToUsePopoverOpen, setWhenToUsePopoverIsOpen] = React.useState(false);
  const [isPitfallsPopoverOpen, setPitfallsPopoverIsOpen] = React.useState(false);
  
  const toggleWhenToUsePopupOpen = React.useCallback(() => {
    setPitfallsPopoverIsOpen(false)
    setWhenToUsePopoverIsOpen(!isWhenToUsePopoverOpen);
  }, [isWhenToUsePopoverOpen, isPitfallsPopoverOpen])

  const togglePitfallsPopupOpen = React.useCallback(() => {
    setWhenToUsePopoverIsOpen(false)
    setPitfallsPopoverIsOpen(!isPitfallsPopoverOpen);
  }, [isPitfallsPopoverOpen, isWhenToUsePopoverOpen])

  return (
    <div>
      <div className="btn-group w-100">
        <Button id="when-to-use" type="button" className={classnames('btn', 'col-6', isWhenToUsePopoverOpen ? 'btn-info' : 'btn-light') }>
          When to Use
        </Button>
        <Button id="pearls-pitfalls" type="button" className={classnames('btn',  'col-6', isPitfallsPopoverOpen ? 'btn-info' : 'btn-light') }>
          Pearls/Pitfalls
        </Button>
      </div>
      <Popover placement="bottom" isOpen={isWhenToUsePopoverOpen} target="when-to-use" toggle={toggleWhenToUsePopupOpen}>
        <PopoverBody>
          <ul>
          {advice.whenToUse.map(i => <li key={i}>{i}</li>)}
          </ul>
        </PopoverBody>
      </Popover>
      <Popover placement="bottom" isOpen={isPitfallsPopoverOpen} target="pearls-pitfalls" toggle={togglePitfallsPopupOpen}>
        <PopoverHeader>{advice.pearlsPitfaills.title}</PopoverHeader>
        <PopoverBody>
          {advice.pearlsPitfaills.text}
        </PopoverBody>
      </Popover>
    </div>
  );
}
