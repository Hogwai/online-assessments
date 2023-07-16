function defaultArguments(func, opt) {
    if (func == undefined) {
        return;
    }

    var strf = func.toString();
    var regFunc = /\(([^)]+)\)/;
    var comment = /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w \']*)|(\<![\-\-\s\w\>\/]*\>)/g;
    if (regFunc.exec(strf) == null) {
        return func;
    }

    var nestedFunc = [];
    if (strf.match(comment) == null) {
        nestedFunc = regFunc.exec(strf)[1].split(',');
    } else {
        var remove_comment = removeComments(strf);
        nestedFunc = regFunc.exec(remove_comment)[1].split(',');
    }


    var opt = opt || {};
    var result = result || {};

    nestedFunc.forEach(function (value, _index) {
        value = value.trim();
        if (opt.hasOwnProperty(value)) {

            result[value] = opt[value];
        } else if (value == 'arg') {
            for (i in opt) {
                if (opt.hasOwnProperty(i)) {
                    result[i] = opt[i];
                }
            }
        }
    });

    return function (arg) {
        var argsArray = Array.prototype.slice.call(arguments);
        var final = [];

        if (nestedFunc == 'arg') {
            argsArray.forEach(function (value, index) {
                if (isNaN(value)) {
                    return NaN;
                }
                result[index] = value
            });
        }
        argsArray.forEach(function (value, index) {
            result[nestedFunc[index]] = value;
        });

        for (i in result) {
            if (result.hasOwnProperty(i)) {
                delete final;
                final.push(result[i]);
            }
        }
        if (arg == undefined && Object.keys(result).length == 0) {
            return NaN;
        }
        return func.apply(this, final);
    }
}

// Remove comment from arguments
function removeComments(str) {
    var uid = '_' + +new Date(),
        primatives = [],
        primIndex = 0;

    return (
        str
            // Remove strings
            .replace(/(['"])(\\\1|.)+?\1/g, function (match) {
                primatives[primIndex] = match;
                return (uid + '') + primIndex++;
            })

            // Remove Regexes
            .replace(/([^\/])(\/(?!\*|\/)(\\\/|.)+?\/[gim]{0,3})/g, function (_match, $1, $2) {
                primatives[primIndex] = $2;
                return $1 + (uid + '') + primIndex++;
            })


            .replace(/\/\/.*?\/?\*.+?(?=\n|\r|$)|\/\*[\s\S]*?\/\/[\s\S]*?\*\//g, '')

            // Remove single and multi-line comments, no consideration of inner-contents
            .replace(/\/\/.+?(?=\n|\r|$)|\/\*[\s\S]+?\*\//g, '')


            .replace(RegExp('\\/\\*[\\s\\S]+' + uid + '\\d+', 'g'), '')

            // Bring back strings & regexes
            .replace(RegExp(uid + '(\\d+)', 'g'), function (_match, n) {
                return primatives[n];
            })
    );
}