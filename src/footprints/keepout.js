module.exports = {
    params: {
        points: []
    },
    body: p => `
        (zone
            (layers "F&B.Cu")
            (hatch edge 0.5)
            (connect_pads (clearance 0))
            (min_thickness 0.25)
            (filled_areas_thickness no)
            (keepout (tracks not_allowed) (vias not_allowed) (pads not_allowed) (copperpour allowed) (footprints allowed))
            (fill (thermal_gap 0.5) (thermal_bridge_width 0.5))
            (polygon
                (pts
                    ${
                        p.points
                            .map(({x, y}) => `(xy ${p.xy(x, y)})`)
                            .join('\n')
                    }
                )
            )
        )
    `
}
