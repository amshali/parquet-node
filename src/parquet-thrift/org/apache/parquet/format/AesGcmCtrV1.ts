/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
export interface IAesGcmCtrV1Args {
    aad_prefix?: Buffer;
    aad_file_unique?: Buffer;
    supply_aad_prefix?: boolean;
}
export class AesGcmCtrV1 {
    public aad_prefix?: Buffer;
    public aad_file_unique?: Buffer;
    public supply_aad_prefix?: boolean;
    constructor(args?: IAesGcmCtrV1Args) {
        if (args != null && args.aad_prefix != null) {
            this.aad_prefix = args.aad_prefix;
        }
        if (args != null && args.aad_file_unique != null) {
            this.aad_file_unique = args.aad_file_unique;
        }
        if (args != null && args.supply_aad_prefix != null) {
            this.supply_aad_prefix = args.supply_aad_prefix;
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("AesGcmCtrV1");
        if (this.aad_prefix != null) {
            output.writeFieldBegin("aad_prefix", thrift.Thrift.Type.STRING, 1);
            output.writeBinary(this.aad_prefix);
            output.writeFieldEnd();
        }
        if (this.aad_file_unique != null) {
            output.writeFieldBegin("aad_file_unique", thrift.Thrift.Type.STRING, 2);
            output.writeBinary(this.aad_file_unique);
            output.writeFieldEnd();
        }
        if (this.supply_aad_prefix != null) {
            output.writeFieldBegin("supply_aad_prefix", thrift.Thrift.Type.BOOL, 3);
            output.writeBool(this.supply_aad_prefix);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): AesGcmCtrV1 {
        input.readStructBegin();
        let _args: any = {};
        while (true) {
            const ret: thrift.TField = input.readFieldBegin();
            const fieldType: thrift.Thrift.Type = ret.ftype;
            const fieldId: number = ret.fid;
            if (fieldType === thrift.Thrift.Type.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_1: Buffer = input.readBinary();
                        _args.aad_prefix = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRING) {
                        const value_2: Buffer = input.readBinary();
                        _args.aad_file_unique = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_3: boolean = input.readBool();
                        _args.supply_aad_prefix = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return new AesGcmCtrV1(_args);
    }
}
