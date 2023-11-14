// Author: @infused-kim
//
// Description:
// Reversible footprint for nice!view display. Includes an outline of the
// display to make positioning easier.

module.exports = {
  params: {
    designator: 'DISP',
    side: 'F',
    reverse: false,
    MOSI: {type: 'net', value: 'MOSI'},
    SCK: {type: 'net', value: 'SCK'},
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'},
    CS: {type: 'net', value: 'CS'},
    show_labels: {type: 'boolean', value: true},
    jumpers_at_bottom: false,
  },
  body: p => {

    let dst_nets = [
      p.MOSI.str,
      p.SCK.str,
      p.VCC.str,
      p.GND.str,
      p.CS.str,
    ];
    local_nets = [
      p.local_net("1").str,
      p.local_net("2").str,
      p.VCC.str,
      p.local_net("4").str,
      p.local_net("5").str,
    ];

    let socket_nets = dst_nets;
    if(p.reverse) {
      socket_nets = local_nets;
    } else if(p.side == 'B') {
      socket_nets = dst_nets.slice().reverse();
    }

    let jumpers_offset = 0;
    let jumpers_rot = 0;
    let labels_offset = 0;
    let label_vcc_offset = 0;

    let jumpers_front_top = dst_nets;
    let jumpers_front_bottom = local_nets;
    let jumpers_back_top = dst_nets;
    let jumpers_back_bottom = local_nets.slice().reverse();
    if(p.jumpers_at_bottom) {
      jumpers_offset = 5.7;
      jumpers_rot = 180;
      labels_offset = jumpers_offset + 2 + 1 + 0.1;
      label_vcc_offset = 4.85;

      jumpers_front_top = local_nets;
      jumpers_front_bottom = dst_nets;
      jumpers_back_top = local_nets.slice().reverse();
      jumpers_back_bottom = dst_nets;
    }

    const top = `
      (module nice!view (layer F.Cu) (tedit 6448AF5B)
        ${p.at /* parametric position */}
        (attr virtual)
        (fp_text reference "${p.ref}" (at 0 20 ${p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15)))
        )
        `
    const front = `
        (fp_line (start -6.5 -18) (end 6.5 -18) (layer F.Fab) (width 0.15))
        (fp_line (start 6.5 18) (end -6.5 18) (layer F.Fab) (width 0.15))
        (fp_line (start -7 17.5) (end -7 -17.5) (layer F.Fab) (width 0.15))
        (fp_line (start 7 17.5) (end 7 -17.5) (layer F.Fab) (width 0.15))
        (fp_line (start -6.41 15.37) (end -6.41 18.03) (layer F.SilkS) (width 0.12))
        (fp_line (start 6.41 18.03) (end -6.41 18.03) (layer F.SilkS) (width 0.12))
        (fp_line (start 6.88 14.9) (end 6.88 18.45) (layer F.CrtYd) (width 0.15))
        (fp_line (start 6.88 18.45) (end -6.82 18.45) (layer F.CrtYd) (width 0.15))
        (fp_line (start -6.82 18.45) (end -6.82 14.9) (layer F.CrtYd) (width 0.15))
        (fp_line (start -6.82 14.9) (end 6.88 14.9) (layer F.CrtYd) (width 0.15))
        (fp_line (start 6.41 15.37) (end 6.41 18.03) (layer F.SilkS) (width 0.12))
        (fp_line (start 6.41 15.37) (end -6.41 15.37) (layer F.SilkS) (width 0.12))
        (fp_arc (start -6.5 17.5) (end -7 17.5) (angle -90) (layer F.Fab) (width 0.15))
        (fp_arc (start 6.5 17.5) (end 6.5 18) (angle -90) (layer F.Fab) (width 0.15))
        (fp_arc (start 6.5 -17.5) (end 6.5 -18) (angle 90) (layer F.Fab) (width 0.15))
        (fp_arc (start -6.5 -17.5) (end -6.5 -18) (angle -90) (layer F.Fab) (width 0.15))
        (fp_text user %R (at 0 20 ${p.rot}) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )

    `

    const front_jumpers = `
        (fp_line (start 5.93 ${12.9 + jumpers_offset}) (end 5.93 ${14.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start -5.93 ${14.9 + jumpers_offset}) (end -5.93 ${12.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start -5.93 ${12.9 + jumpers_offset}) (end -4.23 ${12.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start -4.23 ${14.9 + jumpers_offset}) (end -5.93 ${14.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start -4.23 ${12.9 + jumpers_offset}) (end -4.23 ${14.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start -3.39 ${14.9 + jumpers_offset}) (end -3.39 ${12.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start -3.39 ${12.9 + jumpers_offset}) (end -1.69 ${12.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start -1.69 ${14.9 + jumpers_offset}) (end -3.39 ${14.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start -1.69 ${12.9 + jumpers_offset}) (end -1.69 ${14.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start 3.39 ${12.9 + jumpers_offset}) (end 3.39 ${14.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start 3.39 ${14.9 + jumpers_offset}) (end 1.69 ${14.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start 1.69 ${14.9 + jumpers_offset}) (end 1.69 ${12.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start 1.69 ${12.9 + jumpers_offset}) (end 3.39 ${12.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start 5.93 ${14.9 + jumpers_offset}) (end 4.23 ${14.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start 4.23 ${14.9 + jumpers_offset}) (end 4.23 ${12.9 + jumpers_offset}) (layer F.Fab) (width 0.15))
        (fp_line (start 4.23 ${12.9 + jumpers_offset}) (end 5.93 ${12.9 + jumpers_offset}) (layer F.Fab) (width 0.15))

        (pad 14 smd rect (at -5.08 ${13.45 + jumpers_offset} ${90 + p.rot}) (size 0.6 1.2) (layers F.Cu F.Mask) ${ jumpers_front_top[0] })
        (pad 15 smd rect (at -2.54 ${13.45 + jumpers_offset} ${90 + p.rot}) (size 0.6 1.2) (layers F.Cu F.Mask) ${ jumpers_front_top[1] })
        (pad 16 smd rect (at 2.54 ${13.45 + jumpers_offset} ${90 + p.rot}) (size 0.6 1.2) (layers F.Cu F.Mask) ${ jumpers_front_top[3] })
        (pad 17 smd rect (at 5.08 ${13.45 + jumpers_offset} ${90 + p.rot}) (size 0.6 1.2) (layers F.Cu F.Mask) ${ jumpers_front_top[4] })

        (pad 10 smd rect (at -5.08 ${14.35 + jumpers_offset} ${90 + p.rot}) (size 0.6 1.2) (layers F.Cu F.Mask) ${ jumpers_front_bottom[0] })
        (pad 11 smd rect (at -2.54 ${14.35 + jumpers_offset} ${90 + p.rot}) (size 0.6 1.2) (layers F.Cu F.Mask) ${ jumpers_front_bottom[1] })
        (pad 12 smd rect (at 2.54 ${14.35 + jumpers_offset} ${90 + p.rot}) (size 0.6 1.2) (layers F.Cu F.Mask) ${ jumpers_front_bottom[3] })
        (pad 13 smd rect (at 5.08 ${14.35 + jumpers_offset} ${90 + p.rot}) (size 0.6 1.2) (layers F.Cu F.Mask) ${ jumpers_front_bottom[4] })
    `

    const back = `
        (fp_line (start 6.41 15.37) (end 6.41 18.03) (layer B.SilkS) (width 0.12))
        (fp_line (start 6.41 15.37) (end -6.41 15.37) (layer B.SilkS) (width 0.12))
        (fp_line (start 6.41 18.03) (end -6.41 18.03) (layer B.SilkS) (width 0.12))
        (fp_line (start 6.88 14.9) (end 6.88 18.45) (layer B.CrtYd) (width 0.15))
        (fp_line (start 6.88 18.45) (end -6.82 18.45) (layer B.CrtYd) (width 0.15))
        (fp_line (start -6.82 18.45) (end -6.82 14.9) (layer B.CrtYd) (width 0.15))
        (fp_line (start -6.82 14.9) (end 6.88 14.9) (layer B.CrtYd) (width 0.15))
        (fp_line (start -6.41 15.37) (end -6.41 18.03) (layer B.SilkS) (width 0.12))
        (fp_line (start -6.5 18) (end 6.5 18) (layer B.Fab) (width 0.15))
        (fp_line (start 7 -17.5) (end 7 17.5) (layer B.Fab) (width 0.15))
        (fp_line (start 6.5 -18) (end -6.5 -18) (layer B.Fab) (width 0.15))
        (fp_line (start -7 -17.5) (end -7 17.5) (layer B.Fab) (width 0.15))
        (fp_arc (start -6.5 -17.5) (end -7 -17.5) (angle 90) (layer B.Fab) (width 0.15))
        (fp_arc (start 6.5 -17.5) (end 6.5 -18) (angle 90) (layer B.Fab) (width 0.15))
        (fp_arc (start 6.5 17.5) (end 6.5 18) (angle -90) (layer B.Fab) (width 0.15))
        (fp_arc (start -6.5 17.5) (end -6.5 18) (angle 90) (layer B.Fab) (width 0.15))
    `

    const back_jumpers = `
        (fp_line (start -5.93 ${12.9 + jumpers_offset}) (end -5.93 ${14.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start -5.93 ${14.9 + jumpers_offset}) (end -4.23 ${14.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start -4.23 ${12.9 + jumpers_offset}) (end -5.93 ${12.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start -4.23 ${14.9 + jumpers_offset}) (end -4.23 ${12.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start -3.39 ${14.9 + jumpers_offset}) (end -1.69 ${14.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start -1.69 ${12.9 + jumpers_offset}) (end -3.39 ${12.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start 4.23 ${14.9 + jumpers_offset}) (end 5.93 ${14.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start 5.93 ${14.9 + jumpers_offset}) (end 5.93 ${12.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start 3.39 ${12.9 + jumpers_offset}) (end 1.69 ${12.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start -1.69 ${14.9 + jumpers_offset}) (end -1.69 ${12.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start -3.39 ${12.9 + jumpers_offset}) (end -3.39 ${14.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start 1.69 ${12.9 + jumpers_offset}) (end 1.69 ${14.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start 1.69 ${14.9 + jumpers_offset}) (end 3.39 ${14.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start 3.39 ${14.9 + jumpers_offset}) (end 3.39 ${12.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start 5.93 ${12.9 + jumpers_offset}) (end 4.23 ${12.9 + jumpers_offset}) (layer B.Fab) (width 0.15))
        (fp_line (start 4.23 ${12.9 + jumpers_offset}) (end 4.23 ${14.9 + jumpers_offset}) (layer B.Fab) (width 0.15))

        (pad 24 smd rect (at 5.08 ${13.45 + jumpers_offset} ${270 + p.rot}) (size 0.6 1.2) (layers B.Cu B.Mask) ${ jumpers_back_top[0] })
        (pad 25 smd rect (at 2.54 ${13.45 + jumpers_offset} ${270 + p.rot}) (size 0.6 1.2) (layers B.Cu B.Mask) ${ jumpers_back_top[1] })
        (pad 26 smd rect (at -2.54 ${13.45 + jumpers_offset} ${270 + p.rot}) (size 0.6 1.2) (layers B.Cu B.Mask) ${ jumpers_back_top[3] })
        (pad 27 smd rect (at -5.08 ${13.45 + jumpers_offset} ${270 + p.rot}) (size 0.6 1.2) (layers B.Cu B.Mask) ${ jumpers_back_top[4] })

        (pad 20 smd rect (at 5.08 ${14.35 + jumpers_offset} ${270 + p.rot}) (size 0.6 1.2) (layers B.Cu B.Mask) ${ jumpers_back_bottom[0] })
        (pad 21 smd rect (at 2.54 ${14.35 + jumpers_offset} ${270 + p.rot}) (size 0.6 1.2) (layers B.Cu B.Mask) ${ jumpers_back_bottom[1] })
        (pad 22 smd rect (at -2.54 ${14.35 + jumpers_offset} ${270 + p.rot}) (size 0.6 1.2) (layers B.Cu B.Mask) ${ jumpers_back_bottom[3] })
        (pad 23 smd rect (at -5.08 ${14.35 + jumpers_offset} ${270 + p.rot}) (size 0.6 1.2) (layers B.Cu B.Mask) ${ jumpers_back_bottom[4] })
    `

    const labels = `
        (fp_text user DA (at -5.08 ${12.5 + labels_offset} ${p.rot}) (layer F.SilkS)
          (effects (font (size 1 0.7) (thickness 0.1)))
        )
        (fp_text user CS (at 5.12 ${12.5 + labels_offset} ${p.rot}) (layer F.SilkS)
          (effects (font (size 1 0.7) (thickness 0.1)))
        )
        (fp_text user GND (at 2.62 ${12.5 + labels_offset} ${p.rot}) (layer F.SilkS)
          (effects (font (size 1 0.7) (thickness 0.1)))
        )
        (fp_text user VCC (at 0.15 ${14.4 + label_vcc_offset} ${p.rot}) (layer F.SilkS)
          (effects (font (size 1 0.7) (thickness 0.1)))
        )
        (fp_text user CL (at -2.48 ${12.5 + labels_offset} ${p.rot}) (layer F.SilkS)
          (effects (font (size 1 0.7) (thickness 0.1)))
        )
        (fp_text user CS (at -4.98 ${12.5 + labels_offset} ${p.rot}) (layer B.SilkS)
          (effects (font (size 1 0.7) (thickness 0.1)) (justify mirror))
        )
        (fp_text user VCC (at 0.15 ${14.4 + label_vcc_offset} ${p.rot}) (layer B.SilkS)
          (effects (font (size 1 0.7) (thickness 0.1)) (justify mirror))
        )
        (fp_text user DA (at 5.22 ${12.5 + labels_offset} ${p.rot}) (layer B.SilkS)
          (effects (font (size 1 0.7) (thickness 0.1)) (justify mirror))
        )
        (fp_text user CL (at 2.72 ${12.5 + labels_offset} ${p.rot}) (layer B.SilkS)
          (effects (font (size 1 0.7) (thickness 0.1)) (justify mirror))
        )
        (fp_text user GND (at -2.38 ${12.5 + labels_offset} ${p.rot}) (layer B.SilkS)
          (effects (font (size 1 0.7) (thickness 0.1)) (justify mirror))
        )
    `

    const bottom = `
      (pad 1 thru_hole oval (at -5.08 16.7 ${270 + p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${ socket_nets[0] })
      (pad 2 thru_hole oval (at -2.54 16.7 ${270 + p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${ socket_nets[1] })
      (pad 3 thru_hole oval (at 0 16.7 ${270 + p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${ socket_nets[2] })
      (pad 4 thru_hole oval (at 2.54 16.7 ${270 + p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${ socket_nets[3] })
      (pad 5 thru_hole circle (at 5.08 16.7 ${270 + p.rot}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${ socket_nets[4] })

      (fp_line (start 5.4 13.4) (end 5.4 -11.9) (layer Dwgs.User) (width 0.15))
      (fp_line (start -5.4 13.4) (end -5.4 -11.9) (layer Dwgs.User) (width 0.15))
      (fp_line (start 5.4 -11.9) (end -5.4 -11.9) (layer Dwgs.User) (width 0.15))
      (fp_line (start -5.4 13.4) (end 5.4 13.4) (layer Dwgs.User) (width 0.15))
    )
    `

    let final = top;

    if(p.side == "F" || p.reverse) {
      final += front;
    }
    if(p.side == "B" || p.reverse) {
      final += back;
    }

    if(p.reverse) {
      final += front_jumpers;
      final += back_jumpers;

      if(p.show_labels) {
        final += labels;
      }
    }

    final += bottom;

    return final;
  }
}