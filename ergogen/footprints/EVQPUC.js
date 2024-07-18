module.exports = {
    params: {
        designator: 'B', // for Button
        side: 'F',
        from: undefined,
        to: undefined
    },
    body: p => `
    
    (module Panasonic_EVQPUL_EVQPUC (layer F.Cu) 

        (descr "http://industrial.panasonic.com/cdbs/www-data/pdf/ATV0000/ATV0000CE5.pdf")
        (tags "SMD SMT SPST EVQPUL EVQPUC")

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer "F.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "Panasonic_EVQPUL_EVQPUC" (at 0 3.5) (layer "F.Fab") hide (effects (font (size 1 1) (thickness 0.15))))
        
        ${'' /* outline */}
        (fp_line (start -2.45 0.275) (end -2.45 -0.275) (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
        (fp_line (start -1.425 -1.85) (end -2.35 -1.85) (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
        (fp_line (start 2.35 -1.85) (end 1.425 -1.85) (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
        (fp_line (start 2.35 1.85) (end -2.35 1.85) (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
        (fp_line (start 2.45 0.275) (end 2.45 -0.275) (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS"))
        (fp_line (start -3.9 2.25) (end -3.9 -3.25) (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
        (fp_line (start 3.9 -3.25) (end -3.9 -3.25) (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
        (fp_line (start 3.9 2.25) (end -3.9 2.25) (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
        (fp_line (start 3.9 2.25) (end 3.9 -3.25) (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd"))
        (fp_line (start -2.35 1.75) (end -2.35 -1.75) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
        (fp_line (start -1.3 -2.75) (end -1.3 -1.75) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
        (fp_line (start 1.3 -2.75) (end -1.3 -2.75) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
        (fp_line (start 1.3 -2.75) (end 1.3 -1.75) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
        (fp_line (start 2.35 -1.75) (end -2.35 -1.75) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
        (fp_line (start 2.35 1.75) (end -2.35 1.75) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
        (fp_line (start 2.35 1.75) (end 2.35 -1.75) (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab"))
        
        ${'' /* pins */}
        (pad "" np_thru_hole circle (at 0 -1.375 ${p.rot}) (size 0.75 0.75) (drill 0.75) (layers "*.Cu" "*.Mask"))
        (pad "" np_thru_hole circle (at 0 1.375 ${p.rot}) (size 0.75 0.75) (drill 0.75) (layers "*.Cu" "*.Mask"))
        (pad "1" smd rect (at -2.625 -0.85 ${p.rot}) (size 1.55 1) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.from.str})
        (pad "1" smd rect (at 2.625 -0.85 ${p.rot}) (size 1.55 1) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.from.str})
        (pad "2" smd rect (at -2.625 0.85 ${p.rot}) (size 1.55 1) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.to.str})
        (pad "2" smd rect (at 2.625 0.85 ${p.rot}) (size 1.55 1) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.to.str})
    )
    
    `
}
