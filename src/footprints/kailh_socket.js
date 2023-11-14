// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
// 
// note: hotswap and reverse can be used simultaneously

module.exports = {
  params: {
    designator: 'S',
    keycaps: false,
    from: undefined,
    to: undefined
  },
  body: p => {
    const standard = `
    (module Kailh_socket_PG1350_optional_mkultra (layer F.Cu) (tedit 63C44EC5)
      ${p.at /* parametric position */}
      (descr "Kailh Choc PG1350 keyswitch with optional socket mount")
      (tags kailh,choc)

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))

      ${''/* hotswap outline */}
      (fp_line (start -2 -4.25) (end -2 -7.7) (layer B.SilkS) (width 0.12))
      (fp_line (start 2.5 -2.2) (end 2.5 -1.5) (layer B.SilkS) (width 0.15))
      (fp_line (start 2.5 -1.5) (end 7 -1.5) (layer B.SilkS) (width 0.15))
      (fp_line (start 1.5 -8.2) (end 2 -7.7) (layer B.SilkS) (width 0.15))
      (fp_line (start 2 -6.7) (end 2 -7.7) (layer B.SilkS) (width 0.15))
      (fp_line (start 7 -6.2) (end 2.5 -6.2) (layer B.SilkS) (width 0.15))
      (fp_line (start -2 -4.2) (end -1.5 -3.7) (layer B.SilkS) (width 0.15))
      (fp_line (start -1.5 -3.7) (end 1 -3.7) (layer B.SilkS) (width 0.15))
      (fp_line (start -2 -7.7) (end -1.5 -8.2) (layer B.SilkS) (width 0.15))
      (fp_line (start -1.5 -8.2) (end 1.5 -8.2) (layer B.SilkS) (width 0.15))
      (fp_line (start 7 -1.5) (end 7 -6.2) (layer B.SilkS) (width 0.12))
      (fp_arc (start 2.5 -6.7) (end 2 -6.7) (angle -90) (layer B.SilkS) (width 0.15))
      (fp_arc (start 1 -2.2) (end 2.5 -2.2) (angle -90) (layer B.SilkS) (width 0.15))

      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))
        
      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))

      ${''/* pins */}
      (pad 1 smd rect (at -3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask) ${p.from.str})
      (pad 2 smd rect (at 8.275 -3.75 ${p.rot}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask) ${p.to.str})
      (pad "" np_thru_hole circle (at 5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      (pad 1 thru_hole circle (at 0 5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.from.str})
      (pad 2 thru_hole circle (at -5 3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to.str})
      `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start 8.75 8.25) (end 8.75 -8.25) (layer Dwgs.User) (width 0.12))
      (fp_line (start -8.75 8.25) (end 8.75 8.25) (layer Dwgs.User) (width 0.12))
      (fp_line (start -8.75 -8.25) (end 8.75 -8.25) (layer Dwgs.User) (width 0.12))
      (fp_line (start -8.75 8.25) (end -8.75 -8.25) (layer Dwgs.User) (width 0.12))
      `
    return `
      ${standard}
      ${p.keycaps ? keycap : ''})
    `
  }
}