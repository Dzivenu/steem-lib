var assert = require("assert");

/**
    Convert 12.34 with a precision of 3 into 12340

    @arg {number|string} number - Use strings for large numbers.  This may contain one decimal but no sign
    @arg {number} precision - number of implied decimal places (usually causes right zero padding)
    @return {string} -
*/
module.exports = {
    toImpliedDecimal: function(number, precision) {

        if(typeof number === "number") {
            assert(number <= 9007199254740991, "overflow")
            number = ""+number;
        } else
            if( number.toString )
                number = number.toString()

        assert(typeof number === "string", "number should be an actual number or string: " + (typeof number))
        number = number.trim()
        assert(/^[0-9]*\.?[0-9]*$/.test(number), "Invalid decimal number " + number)

        var num_split = number.split(".")
        var whole = num_split[0] ? num_split[0] : "";
        var decimal = num_split[1] ? num_split[1] : "";

        var padding = precision - decimal.length
        assert(padding >= 0, "Too many decimal digits in " + number + " to create an implied decimal of " + precision)

        for(var i = 0; i < padding; i++)
            decimal += "0"

        while(whole.charAt(0) === "0")
            whole = whole.substring(1)

        return whole + decimal
    },

    fromImpliedDecimal: function(number, precision) {
        if(typeof number === "number") {
            assert(number <= 9007199254740991, "overflow")
            number = ""+number;
        } else
            if( number.toString )
                number = number.toString()

        while(number.length < precision + 1)// 0.123
            number = "0" + number

        // 44000 => 44.000
        var dec_string = number.substring(number.length - precision)
        return number.substring(0, number.length - precision) +
            (dec_string ? "." + dec_string : "")

    }
}