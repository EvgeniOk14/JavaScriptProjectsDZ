function getResult(users)
{
    const result = users.
                       filter(item => item[1] > 25 & item[2]).
                       sort((a,b) => (b[1] - a[1])).
                       map(item => item[0]);
    return result;
}

