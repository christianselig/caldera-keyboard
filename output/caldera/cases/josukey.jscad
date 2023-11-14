function _board_outline_extrude_3_outline_fn(){
    return new CSG.Path2D([[104.2334063,-8.5822042],[97.8199514,-23.2961462]]).appendArc([97.604579,-23.672579],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.9175445,-38.3820202]).appendArc([84.1239399,-38.8244835],{"radius":2,"clockwise":true,"large":false}).appendPoint([71.2996217,-29.5070709]).appendArc([71.0481742,-29.3514091],{"radius":2,"clockwise":false,"large":false}).appendPoint([68.8433314,-28.2026517]).appendArc([68.5372423,-28.0742343],{"radius":2,"clockwise":false,"large":false}).appendPoint([55.1393729,-23.7210027]).appendArc([54.8563813,-23.6513788],{"radius":2,"clockwise":false,"large":false}).appendPoint([52.3663289,-23.228263]).appendArc([52.0312865,-23.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([35.5349125,-23.2]).appendArc([33.6879191,-21.9672126],{"radius":2,"clockwise":true,"large":false}).appendPoint([29.3120809,-11.4327874]).appendArc([27.4650875,-10.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.8,-10.2]).appendArc([-10.8,-8.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([-10.8,42.2]).appendArc([-8.8,44.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([5.9068288,44.2]).appendArc([7.7306718,45.3792706],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.4693282,47.0207294]).appendArc([10.2931712,48.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([24.6438349,48.2]).appendArc([25.6763229,48.4871169],{"radius":2,"clockwise":false,"large":false}).appendPoint([28.312767,50.0763068]).appendArc([29.3688644,50.3632842],{"radius":2,"clockwise":true,"large":false}).appendPoint([42.6943615,50.2059693]).appendArc([43.6420379,49.9544233],{"radius":2,"clockwise":true,"large":false}).appendPoint([46.3469664,48.4516854]).appendArc([47.3182522,48.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([62.1092752,48.2]).appendArc([63.5958635,47.5379295],{"radius":2,"clockwise":true,"large":false}).appendPoint([64.8,46.2]).appendPoint([79.7958372,46.2]).appendArc([81.563413,45.1357754],{"radius":2,"clockwise":true,"large":false}).appendPoint([82.236587,43.8642246]).appendArc([84.0041628,42.8],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.4,42.8]).appendArc([104.4,40.8],{"radius":2,"clockwise":true,"large":false}).appendPoint([104.4,-7.7830664]).appendArc([104.2334063,-8.5822042],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function _keycap_outlines_extrude_6_outline_fn(){
    return new CSG.Path2D([[72.6899069,-28.1068397],[83.6116363,-36.0419406]]).appendArc([86.4052408,-35.5994773],{"radius":2,"clockwise":false,"large":false}).appendPoint([93.7525565,-25.4867648]).appendArc([93.3100931,-22.6931604],{"radius":2,"clockwise":false,"large":false}).appendPoint([82.3883637,-14.7580594]).appendArc([79.5947592,-15.2005227],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.2474435,-25.3132352]).appendArc([72.6899069,-28.1068396],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[38.25,-21.25],[51.75,-21.25]]).appendArc([53.75,-19.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([53.75,-6.75]).appendArc([51.75,-4.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([38.25,-4.75]).appendArc([36.25,-6.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([36.25,-19.25]).appendArc([38.25,-21.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[65.25,27.75],[78.75,27.75]]).appendArc([80.75,29.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.75,42.25]).appendArc([78.75,44.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([65.25,44.25]).appendArc([63.25,42.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([63.25,29.75]).appendArc([65.25,27.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[65.25,10.75],[78.75,10.75]]).appendArc([80.75,12.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.75,25.25]).appendArc([78.75,27.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([65.25,27.25]).appendArc([63.25,25.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([63.25,12.75]).appendArc([65.25,10.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[65.25,-6.25],[78.75,-6.25]]).appendArc([80.75,-4.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.75,8.25]).appendArc([78.75,10.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([65.25,10.25]).appendArc([63.25,8.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([63.25,-4.25]).appendArc([65.25,-6.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[47.25,29.75],[60.75,29.75]]).appendArc([62.75,31.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([62.75,44.25]).appendArc([60.75,46.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([47.25,46.25]).appendArc([45.25,44.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([45.25,31.75]).appendArc([47.25,29.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[47.25,12.75],[60.75,12.75]]).appendArc([62.75,14.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([62.75,27.25]).appendArc([60.75,29.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([47.25,29.25]).appendArc([45.25,27.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([45.25,14.75]).appendArc([47.25,12.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[47.25,-4.25],[60.75,-4.25]]).appendArc([62.75,-2.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([62.75,10.25]).appendArc([60.75,12.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([47.25,12.25]).appendArc([45.25,10.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([45.25,-2.25]).appendArc([47.25,-4.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[29.25,31.75],[42.75,31.75]]).appendArc([44.75,33.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([44.75,46.25]).appendArc([42.75,48.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([29.25,48.25]).appendArc([27.25,46.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([27.25,33.75]).appendArc([29.25,31.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[29.25,14.75],[42.75,14.75]]).appendArc([44.75,16.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([44.75,29.25]).appendArc([42.75,31.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([29.25,31.25]).appendArc([27.25,29.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([27.25,16.75]).appendArc([29.25,14.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[29.25,-2.25],[42.75,-2.25]]).appendArc([44.75,-0.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([44.75,12.25]).appendArc([42.75,14.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([29.25,14.25]).appendArc([27.25,12.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([27.25,-0.25]).appendArc([29.25,-2.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[11.25,29.75],[24.75,29.75]]).appendArc([26.75,31.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([26.75,44.25]).appendArc([24.75,46.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([11.25,46.25]).appendArc([9.25,44.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([9.25,31.75]).appendArc([11.25,29.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[11.25,12.75],[24.75,12.75]]).appendArc([26.75,14.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([26.75,27.25]).appendArc([24.75,29.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([11.25,29.25]).appendArc([9.25,27.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([9.25,14.75]).appendArc([11.25,12.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[11.25,-4.25],[24.75,-4.25]]).appendArc([26.75,-2.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([26.75,10.25]).appendArc([24.75,12.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([11.25,12.25]).appendArc([9.25,10.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([9.25,-2.25]).appendArc([11.25,-4.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.75,25.75],[6.75,25.75]]).appendArc([8.75,27.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.75,40.25]).appendArc([6.75,42.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-6.75,42.25]).appendArc([-8.75,40.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.75,27.75]).appendArc([-6.75,25.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.75,8.75],[6.75,8.75]]).appendArc([8.75,10.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.75,23.25]).appendArc([6.75,25.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-6.75,25.25]).appendArc([-8.75,23.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.75,10.75]).appendArc([-6.75,8.75],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[-6.75,-8.25],[6.75,-8.25]]).appendArc([8.75,-6.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([8.75,6.25]).appendArc([6.75,8.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-6.75,8.25]).appendArc([-8.75,6.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.75,-6.25]).appendArc([-6.75,-8.25],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[56.0309783,-21.9603516],[68.8702413,-26.132081]]).appendArc([71.3903883,-24.848002],{"radius":2,"clockwise":false,"large":false}).appendPoint([75.2531007,-12.9597954]).appendArc([73.9690217,-10.4396484],{"radius":2,"clockwise":false,"large":false}).appendPoint([61.1297587,-6.267919]).appendArc([58.6096117,-7.551998],{"radius":2,"clockwise":false,"large":false}).appendPoint([54.7468993,-19.4402046]).appendArc([56.0309783,-21.9603516],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 6] });
}




                function josukey_case_fn() {
                    

                // creating part 0 of case josukey
                let josukey__part_0 = _board_outline_extrude_3_outline_fn();

                // make sure that rotations are relative
                let josukey__part_0_bounds = josukey__part_0.getBounds();
                let josukey__part_0_x = josukey__part_0_bounds[0].x + (josukey__part_0_bounds[1].x - josukey__part_0_bounds[0].x) / 2
                let josukey__part_0_y = josukey__part_0_bounds[0].y + (josukey__part_0_bounds[1].y - josukey__part_0_bounds[0].y) / 2
                josukey__part_0 = translate([-josukey__part_0_x, -josukey__part_0_y, 0], josukey__part_0);
                josukey__part_0 = rotate([0,0,0], josukey__part_0);
                josukey__part_0 = translate([josukey__part_0_x, josukey__part_0_y, 0], josukey__part_0);

                josukey__part_0 = translate([0,0,0], josukey__part_0);
                let result = josukey__part_0;
                
            

                // creating part 1 of case josukey
                let josukey__part_1 = _keycap_outlines_extrude_6_outline_fn();

                // make sure that rotations are relative
                let josukey__part_1_bounds = josukey__part_1.getBounds();
                let josukey__part_1_x = josukey__part_1_bounds[0].x + (josukey__part_1_bounds[1].x - josukey__part_1_bounds[0].x) / 2
                let josukey__part_1_y = josukey__part_1_bounds[0].y + (josukey__part_1_bounds[1].y - josukey__part_1_bounds[0].y) / 2
                josukey__part_1 = translate([-josukey__part_1_x, -josukey__part_1_y, 0], josukey__part_1);
                josukey__part_1 = rotate([0,0,0], josukey__part_1);
                josukey__part_1 = translate([josukey__part_1_x, josukey__part_1_y, 0], josukey__part_1);

                josukey__part_1 = translate([0,0,0], josukey__part_1);
                result = result.union(josukey__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return josukey_case_fn();
            }

        