"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSVKeysCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const PrivateKeyAction_1 = require("./actions/PrivateKeyAction");
const BuildSharesAction_1 = require("./actions/BuildSharesAction");
const BuildTransactionAction_1 = require("./actions/BuildTransactionAction");
const BuildTransactionV2Action_1 = require("./actions/BuildTransactionV2Action");
class SSVKeysCommand extends BaseCommand_1.BaseCommand {
    /**
     * Add more specific help.
     */
    constructor() {
        super();
        /**
         * List of all supported command actions.
         * @protected
         */
        this.actions = {
            [PrivateKeyAction_1.PrivateKeyAction.options.action]: PrivateKeyAction_1.PrivateKeyAction,
            [BuildSharesAction_1.BuildSharesAction.options.action]: BuildSharesAction_1.BuildSharesAction,
            [BuildTransactionAction_1.BuildTransactionAction.options.action]: BuildTransactionAction_1.BuildTransactionAction,
            [BuildTransactionV2Action_1.BuildTransactionV2Action.options.action]: BuildTransactionV2Action_1.BuildTransactionV2Action,
        };
        this.subParserOptions.help += 'Example: "ssv-keys decrypt --help" or "ssv-keys dec --help"';
    }
}
exports.SSVKeysCommand = SSVKeysCommand;
//# sourceMappingURL=SSVKeysCommand.js.map