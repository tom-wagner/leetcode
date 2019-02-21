const twoSum = (nums, target) => {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        const lookingFor = target - nums[i];
        if (seen.hasOwnProperty(lookingFor)) {
            const matchingIndex = seen[lookingFor];
            return [matchingIndex, i];
        }
        seen[nums[i]] = i;
    }
};