import { Position } from '@shared/Character';
import { SpellType } from '@shared/Spell';
import { LaunchState } from './move/SpellLaunchMove';
import { SpellEngineAbstract } from './SpellEngineAbstract';

export type SpellResultEnum = 'grid' | 'battleState' | 'charState';

export type SpellResult = Partial<Record<SpellResultEnum, boolean>>;

export abstract class SpellLaunch<T extends SpellType> extends SpellEngineAbstract<'launch', T> {

    abstract async launch(targetPositions: Position[], state: LaunchState[]): Promise<SpellResult>;

    cancel(): void {
        this.beforeCancel();
    }

    protected abstract beforeCancel(): void;
}