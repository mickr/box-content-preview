import React from 'react';
import ControlsBar from '../controls/controls-bar';
import FullscreenToggle, { Props as FullscreenToggleProps } from '../controls/fullscreen';
import IconDrawing24 from '../controls/icons/IconDrawing24';
import IconCheckMark24 from '../controls/icons/IconCheckMark24';
import IconExit24 from '../controls/icons/IconExit24';

export type Props = FullscreenToggleProps & {
    isEditing: boolean;
    onEdit: () => void;
    onSave: () => void;
    onCancel: () => void;
};

const ControlButton = ({ onClick, title, Icon }: { onClick: () => void; title: string; Icon: React.ComponentType }) => (
    <button className="bp-FullscreenToggle" onClick={onClick} title={title} type="button">
        <Icon />
    </button>
);

export default function MarkdownControls({
    onFullscreenToggle,
    isEditing,
    onEdit,
    onSave,
    onCancel,
}: Props): JSX.Element {
    return (
        <ControlsBar>
            {isEditing ? (
                <>
                    <ControlButton Icon={IconCheckMark24} onClick={onSave} title={__('save')} />
                    <ControlButton Icon={IconExit24} onClick={onCancel} title={__('cancel')} />
                </>
            ) : (
                <ControlButton Icon={IconDrawing24} onClick={onEdit} title={__('edit')} />
            )}
            <FullscreenToggle onFullscreenToggle={onFullscreenToggle} />
        </ControlsBar>
    );
}
