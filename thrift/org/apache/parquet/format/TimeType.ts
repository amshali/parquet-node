/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "thrift";
import * as TimeUnit from "./TimeUnit";
export interface ITimeTypeArgs {
    isAdjustedToUTC: boolean;
    unit: TimeUnit.TimeUnit;
}
export class TimeType {
    public isAdjustedToUTC: boolean;
    public unit: TimeUnit.TimeUnit;
    constructor(args: ITimeTypeArgs) {
        if (args != null && args.isAdjustedToUTC != null) {
            this.isAdjustedToUTC = args.isAdjustedToUTC;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[isAdjustedToUTC] is unset!");
        }
        if (args != null && args.unit != null) {
            this.unit = args.unit;
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Required field[unit] is unset!");
        }
    }
    public write(output: thrift.TProtocol): void {
        output.writeStructBegin("TimeType");
        if (this.isAdjustedToUTC != null) {
            output.writeFieldBegin("isAdjustedToUTC", thrift.Thrift.Type.BOOL, 1);
            output.writeBool(this.isAdjustedToUTC);
            output.writeFieldEnd();
        }
        if (this.unit != null) {
            output.writeFieldBegin("unit", thrift.Thrift.Type.STRUCT, 2);
            this.unit.write(output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public static read(input: thrift.TProtocol): TimeType {
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
                    if (fieldType === thrift.Thrift.Type.BOOL) {
                        const value_1: boolean = input.readBool();
                        _args.isAdjustedToUTC = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.Thrift.Type.STRUCT) {
                        const value_2: TimeUnit.TimeUnit = TimeUnit.TimeUnit.read(input);
                        _args.unit = value_2;
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
        if (_args.isAdjustedToUTC !== undefined && _args.unit !== undefined) {
            return new TimeType(_args);
        }
        else {
            throw new thrift.Thrift.TProtocolException(thrift.Thrift.TProtocolExceptionType.UNKNOWN, "Unable to read TimeType from input");
        }
    }
}
