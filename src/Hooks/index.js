import { useState, useRef } from "react";

export const UseCommandLine = () => {
    //Predefined Command
    const preDefCommand = ['/add:', '/uppercase:', '/uuid:', '/math:', '/interest:'];
    //Command value for textarea
    const [commandValue, setCommandValue] = useState('');
    //Set Current Command
    const [command, setCommand] = useState('');
    // It will contain command history
    const [historyCmd, setHistoryCmd] = useState([]);

    // Contain UUID generation
    const [uuidList, setUuidList] = useState([])
    //Set Textarea ref value
    const inputElement = useRef();

    //Set Textarea Value
    const onCommandChange = (e) => {
        console.log(command)
        if (!command) {
            let val = e.target.value.split(':')
            let newCommand = `${val}:`
            setCommand(newCommand)
        }
        const value = e.target.value;
        setCommandValue(value);
    }

    //Fire Command action on Enter key
    const onCommandKeyPress = (e) => {
        debugger
        const value = e.target.value;
        let newHistory = historyCmd;
        let newUuid = uuidList;
        if (e.key === 'Enter') {
            let cmd;
            if (!value.startsWith("/")) {
                resetCommand('')
            }
            else {
                console.log("command", e.target.value)
                if (!preDefCommand.find(e => e === command)) {
                    cmd = preDefCommand.filter(e => e.includes(commandValue))
                    setCommand(cmd[0])
                }
                debugger
                let cmdNew;
                if (cmd && cmd[0]) {
                    newHistory.push({ cmd: cmd[0], cmdValue: cmd[0] })
                    cmdNew = cmd[0];
                    setHistoryCmd(newHistory)
                } else {
                    newHistory.push({ cmd: command, cmdValue: commandValue })
                    cmdNew = command;
                    setHistoryCmd(newHistory)
                }

                switch (cmdNew) {
                    case '/uppercase:':
                        if (cmd && cmd[0]) {
                            inputElement?.current?.focus();
                            setCommand(cmd[0]);
                            setCommandValue(cmd[0]);
                            return
                        } else {
                            let text = textUpperCase();
                            e.preventDefault();
                        }

                        break;
                    case '/add:':
                        if (cmd && cmd[0]) {
                            inputElement?.current?.focus();
                            setCommand(cmd[0]);
                            setCommandValue(cmd[0]);
                            return
                        } else {
                            textToSum();
                            e.preventDefault();
                        }

                        break;
                    case '/uuid:':
                        debugger
                        let uuid = uuidGenerator()
                        newUuid.push(uuid)
                        setUuidList(newUuid)
                        setCommandValue('')
                        setCommand('')
                        break;
                    case '/math:':
                        if (cmd && cmd[0]) {
                            inputElement?.current?.focus();
                            setCommand(cmd[0]);
                            setCommandValue(cmd[0]);
                            return
                        } else {
                            mathOfAllSign()
                            e.preventDefault();
                        }
                        break;
                    case '/interest:':
                        if (cmd && cmd[0]) {
                            inputElement?.current?.focus();
                            setCommand(cmd[0]);
                            setCommandValue(cmd[0]);
                            return
                        } else {
                            calculateInterest()
                            e.preventDefault();
                        }
                        break;
                    default:
                        resetCommand()
                }
            }
        }
    }

    const uuidGenerator = () => {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    //Conver text to uppercase
    const textUpperCase = () => {
        const tempValue = commandValue?.split('/uppercase:');
        setCommandValue(tempValue?.[1]?.toUpperCase());
        setCommand('')
        return tempValue?.[1]?.toUpperCase()
    }
    // Math Calculation for all mix sign
    const mathOfAllSign = () => {
        const tempValue = commandValue?.split('/math:');
        let result = eval(tempValue?.[1]);
        setCommandValue(result);
        setCommand('')
    }
    // Math Calculation for all mix sign

    const calculateInterest = () => {
        debugger
        const tempValue = commandValue?.split('/interest:');

        let result = tempValue[1].split(',')
        //S.I. = P * R * T / 100
        let simpleInterest = (parseInt(result[0]) * parseInt(result[1]) * parseInt(result[2])) / 100;
        debugger
        setCommandValue(simpleInterest);
        setCommand('')
    }
    //Get multiple values sum 
    const textToSum = () => {
        const numbers = commandValue?.split('/add:');
        const sumValue = numbers?.[1]?.split(' ');

        // eslint-disable-next-line array-callback-return
        var filtered = sumValue?.filter((item) => {
            if (item) {
                return !isNaN(item);
            }

        }).reduce((a, b) => parseInt(a) + parseInt(b), 0);

        setCommandValue(filtered);
        setCommand('')
        return filtered
    }

    //Clear Text are value
    const resetCommand = () => {
        setCommand('');
        setCommandValue('');
        inputElement?.current?.focus();
    }

    return {
        preDefCommand,
        commandValue,
        command,
        setCommand,
        setCommandValue,
        onCommandChange,
        onCommandKeyPress,
        textUpperCase,
        textToSum,
        resetCommand,
        inputElement,
        historyCmd,
        uuidList
    }
}


