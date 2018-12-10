/// <reference types="node" />
import { Peripheral } from 'raspi-peripheral';
import { II2C, II2CModule } from 'core-io-types';
export declare type ReadCallback = (err: null | Error | string, data: null | Buffer | number) => void;
export declare type WriteCallback = (err: null | Error | string) => void;
export declare class I2C extends Peripheral implements II2C {
    private _devices;
    constructor();
    destroy(): void;
    read(address: number, length: number, cb: ReadCallback): void;
    read(address: number, register: number, length: number, cb: ReadCallback): void;
    readSync(address: number, registerOrLength: number | undefined, length?: number): Buffer;
    readByte(address: number, cb: ReadCallback): void;
    readByte(address: number, register: number, cb: ReadCallback): void;
    readByteSync(address: number, register?: number): number;
    readWord(address: number, cb: ReadCallback): void;
    readWord(address: number, register: number, cb: ReadCallback): void;
    readWordSync(address: number, register?: number): number;
    write(address: number, buffer: Buffer, cb?: WriteCallback): void;
    write(address: number, register: number, buffer: Buffer, cb?: WriteCallback): void;
    writeSync(address: number, buffer: Buffer): void;
    writeSync(address: number, register: number, buffer: Buffer): void;
    writeByte(address: number, byte: number, cb?: WriteCallback): void;
    writeByte(address: number, register: number, byte: number, cb?: WriteCallback): void;
    writeByteSync(address: number, registerOrByte: number, byte?: number): void;
    writeWord(address: number, word: number, cb?: WriteCallback): void;
    writeWord(address: number, register: number, word: number, cb?: WriteCallback): void;
    writeWordSync(address: number, registerOrWord: number, word?: number): void;
    private _getDevice;
}
export declare const module: II2CModule;
