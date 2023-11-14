module.exports = {
    params: {
        designator: 'D',
        from: {type: 'net', value: 'from'},
        to: {type: 'net', value: 'to'}
    },
    body: p => `
        (footprint "Diode_SMD:Nexperia_CFP3_SOD-123W"
            ${p.at}
            (descr "Nexperia CFP3 (SOD-123W), https://assets.nexperia.com/documents/outline-drawing/SOD123W.pdf")
            (tags "CFP3 SOD-123W")
            (attr smd)
            (fp_text reference "${p.ref}" (at 0 -2 ${p.rot}) (layer "F.SilkS") ${p.ref_hide}
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text value "Nexperia_CFP3_SOD-123W" (at 0 2 ${p.rot}) (layer "F.Fab") hide
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_line (start -2.26 -0.95) (end -2.26 0.95) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.26 -0.95) (end 1.4 -0.95) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.26 0.95) (end 1.4 0.95) (stroke (width 0.12) (type solid)) (layer "F.SilkS"))
            (fp_line (start -2.25 -1.1) (end -2.25 1.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start -2.25 -1.1) (end 2.25 -1.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start 2.25 -1.1) (end 2.25 1.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start 2.25 1.1) (end -2.25 1.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
            (fp_line (start -1.3 -0.85) (end 1.3 -0.85) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -1.3 0.85) (end -1.3 -0.85) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -0.75 0) (end -0.35 0) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -0.35 -0.55) (end -0.35 0.55) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -0.35 0) (end 0.25 -0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start -0.35 0) (end 0.25 0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 0.25 -0.4) (end 0.25 0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 0.75 0) (end 0.25 0) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 1.3 -0.85) (end 1.3 0.85) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
            (fp_line (start 1.3 0.85) (end -1.3 0.85) (stroke (width 0.1) (type solid)) (layer "F.Fab"))

            (fp_line (start -2.26 -0.95) (end -2.26 0.95) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
            (fp_line (start -2.26 -0.95) (end 1.4 -0.95) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
            (fp_line (start -2.26 0.95) (end 1.4 0.95) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
            (fp_line (start -2.25 -1.1) (end -2.25 1.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
            (fp_line (start -2.25 -1.1) (end 2.25 -1.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
            (fp_line (start 2.25 -1.1) (end 2.25 1.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
            (fp_line (start 2.25 1.1) (end -2.25 1.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
            (fp_line (start -1.3 -0.85) (end 1.3 -0.85) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
            (fp_line (start -1.3 0.85) (end -1.3 -0.85) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
            (fp_line (start -0.75 0) (end -0.35 0) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
            (fp_line (start -0.35 -0.55) (end -0.35 0.55) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
            (fp_line (start -0.35 0) (end 0.25 -0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
            (fp_line (start -0.35 0) (end 0.25 0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
            (fp_line (start 0.25 -0.4) (end 0.25 0.4) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
            (fp_line (start 0.75 0) (end 0.25 0) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
            (fp_line (start 1.3 -0.85) (end 1.3 0.85) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
            (fp_line (start 1.3 0.85) (end -1.3 0.85) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
            (pad "1" thru_hole rect (at -1.4 0 ${ p.rot}) (size 1.2 1.2) (drill 0.3) (layers *.Cu *.Mask) (zone_connect 2) ${p.to.str})
            (pad "2" thru_hole rect (at 1.4 0 ${p.rot}) (size 1.2 1.2) (drill 0.3) (layers *.Cu *.Mask) (zone_connect 2) ${p.from.str })
        )
    `
}
