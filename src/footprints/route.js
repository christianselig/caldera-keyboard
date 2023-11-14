module.exports = {
    params: {
        width: 0.25,
        side: 'F',
        net: {type: 'net', value: 'net'},
        points: [],
    },
    body: p => p.points
        .map(({start, end}) => `
            (segment (start ${p.xy(start.x, start.y)}) (end ${p.xy(end.x, end.y)}) (width ${p.width}) (layer "${p.side}.Cu") (net ${p.net.index}))
        `)
        .join('\n')
}
