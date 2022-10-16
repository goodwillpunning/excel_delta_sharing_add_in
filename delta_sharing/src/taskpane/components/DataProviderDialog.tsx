import * as React from "react";
import { Dialog, DialogType, DialogFooter } from "@fluentui/react/lib/Dialog";
import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button";
import { ContextualMenu } from "@fluentui/react/lib/ContextualMenu";
import { useBoolean } from "@fluentui/react-hooks";

const dragOptions = {
  moveMenuItemText: "Move",
  closeMenuItemText: "Close",
  menu: ContextualMenu,
};
const modalPropsStyles = { main: { maxWidth: 450 } };
const dialogContentProps = {
  type: DialogType.normal,
  title: "Data Provider Settings",
  subText: "This information can be found in the sharing profile.",
};
export const DataProviderDialog: React.FunctionComponent = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [isDraggable] = useBoolean(false);
  const modalProps = React.useMemo(
    () => ({
      isBlocking: true,
      styles: modalPropsStyles,
      dragOptions: isDraggable ? dragOptions : undefined,
    }),
    [isDraggable]
  );
  return (
    <>
      <h2 className="ms-font-xl ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20">
        Configure a data provider.
      </h2>
      <DefaultButton
        secondaryText="Update the data provider details"
        onClick={toggleHideDialog}
        iconProps={{ iconName: "ChevronRight" }}
        text="Update Data Provider"
      />
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modalProps}
      >
        <h2 className="ms-font-l ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20">
          Provider Endpoint URL
        </h2>
        <input className="ms-TextField-field" type="text" value="" placeholder="https://some/url/" />
        <h2 className="ms-font-l ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20">Token</h2>
        <input className="ms-TextField-field" type="text" value="" placeholder="dapi1234567890" />
        <DialogFooter>
          <PrimaryButton onClick={toggleHideDialog} text="Update" />
          <DefaultButton onClick={toggleHideDialog} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </>
  );
};
