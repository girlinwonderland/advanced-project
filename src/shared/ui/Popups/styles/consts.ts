import { DropdownDirection } from '../../../types';
import style from './styles.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': style.optionsBottomLeft,
    'bottom right': style.optionsBottomRight,
    'top right': style.optionsTopRight,
    'top left': style.optionsTopLeft,
};
