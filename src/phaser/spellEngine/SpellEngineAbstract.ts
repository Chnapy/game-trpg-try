import { SpellType } from '@shared/Spell';
import { Character } from '../entities/Character';
import { Spell } from '../entities/Spell';
import { MapManager } from '../map/MapManager';
import { BattleScene } from '../scenes/BattleScene';
import { CurrentSpellState } from './SpellEngine';

export abstract class SpellEngineAbstract<S extends Exclude<CurrentSpellState, 'none'>, T extends SpellType> {

    protected readonly scene: BattleScene;
    readonly spell: Spell;
    protected readonly character: Character;
    protected readonly map: MapManager;
    protected readonly characters: Character[];

    constructor(spell: Spell, scene: BattleScene) {
        this.scene = scene;
        this.spell = spell;
        this.character = spell.character;
        this.map = scene.map;
        this.characters = scene.battleData.characters;
    }

    update(time: number, delta: number, graphics: Phaser.GameObjects.Graphics): void {
    }

    onTileHover(pointer: Phaser.Input.Pointer): void {
    }

    onTileClick(pointer: Phaser.Input.Pointer): void {
    }

    abstract cancel(): void;
}