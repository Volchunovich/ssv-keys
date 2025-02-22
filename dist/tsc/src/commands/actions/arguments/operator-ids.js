"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operator_ids_1 = require("../validators/operator-ids");
const uniqueOperatorIds = {};
exports.default = {
    arg1: '-oids',
    arg2: '--operator-ids',
    options: {
        type: String,
        required: true,
        help: 'Comma-separated list of operator IDs. The amount must be 3f+1 compatible'
    },
    interactive: {
        repeat: 'Input another operator?',
        repeatWith: [
            '--operator-keys'
        ],
        options: {
            type: 'number',
            message: 'Enter operator ID for {{index}} operator',
            validate: (operatorId) => {
                if (uniqueOperatorIds[operatorId]) {
                    return 'This operator ID is already used';
                }
                const returnValue = !(Number.isInteger(operatorId) && operatorId > 0) ? 'Invalid operator ID format' : true;
                if (returnValue === true) {
                    uniqueOperatorIds[operatorId] = true;
                }
                return returnValue;
            },
        },
        validateList: (items) => {
            if (!(0, operator_ids_1.isOperatorsLengthValid)(items.length)) {
                throw new Error('Invalid operators amount. Enter an 3f+1 compatible amount of operator ids');
            }
        }
    }
};
//# sourceMappingURL=operator-ids.js.map