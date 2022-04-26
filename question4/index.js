test1 = [1, 2, 3, 4, 6]
test2 = [1, 2, 3, 3]
test3 = [1, 2, 1]

const balancedSum = (list) => {

    function collate(numbers) {
        return numbers.reduce(function(acc, current) {
            return acc + current
        }, 0)
    }


    for (var i = 0; i < list.length; i++) {
		var leftSum = collate(list.slice(0, i))
		var rightSum = collate(list.slice(i + 1))
		if (leftSum === rightSum) {
			console.log(i)
            return i
		}
	}


}





balancedSum(test1)