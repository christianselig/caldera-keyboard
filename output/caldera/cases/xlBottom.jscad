function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[49.5833626,-118.1418136],[74.4882644,-49.7161584]]).appendArc([76.7866422,-48.4445797],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.25726,-59.472194]).appendArc([128.5223076,-59.5484276],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.6945359,-68.3463993]).appendArc([152.9465763,-68.4583703],{"radius":2,"clockwise":true,"large":false}).appendPoint([183.4043542,-84.5898088]).appendArc([184.3476589,-87.0412633],{"radius":2,"clockwise":true,"large":false}).appendPoint([180.1058279,-98.695598]).appendArc([181.9852132,-101.3796382],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.9187942,-101.3796382]).appendArc([192.7981795,-98.695598],{"radius":2,"clockwise":false,"large":false}).appendPoint([188.5563486,-87.0412633]).appendArc([189.4996532,-84.5898089],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.9574311,-68.4583702]).appendArc([220.2094715,-68.3463992],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.3816998,-59.5484277]).appendArc([244.6467474,-59.472194],{"radius":2,"clockwise":true,"large":false}).appendPoint([296.1173652,-48.4445797]).appendArc([298.4157431,-49.7161584],{"radius":2,"clockwise":true,"large":false}).appendPoint([323.3206448,-118.1418136]).appendArc([322.6845109,-120.3924826],{"radius":2,"clockwise":true,"large":false}).appendPoint([294.3325022,-142.8921795]).appendArc([293.7982861,-143.1956493],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.5956813,-161.8504866]).appendArc([244.1074345,-162.1185504],{"radius":2,"clockwise":false,"large":false}).appendPoint([210.2535717,-187.4192687]).appendArc([207.7707142,-187.3493229],{"radius":2,"clockwise":true,"large":false}).appendPoint([190.3909611,-172.7659783]).appendArc([189.1053858,-172.2980672],{"radius":2,"clockwise":false,"large":false}).appendPoint([183.7986216,-172.2980672]).appendArc([182.5130463,-172.7659783],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.1332931,-187.3493229]).appendArc([162.6504357,-187.4192688],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.7965729,-162.1185504]).appendArc([128.3083261,-161.8504866],{"radius":2,"clockwise":false,"large":false}).appendPoint([79.1057213,-143.1956492]).appendArc([78.5715053,-142.8921795],{"radius":2,"clockwise":true,"large":false}).appendPoint([50.2194964,-120.3924826]).appendArc([49.5833626,-118.1418136],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        