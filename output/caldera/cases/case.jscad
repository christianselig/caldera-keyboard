function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[237.3465765,-156.767616],"radius":2.5})
.union(
    CAG.circle({"center":[214.3799239,-93.6672565],"radius":2.5})
).union(
    CAG.circle({"center":[300.6094863,-120.0671156],"radius":2.5})
).union(
    CAG.circle({"center":[283.166459,-72.1427919],"radius":2.5})
).union(
    CAG.circle({"center":[135.5574309,-156.767616],"radius":2.5})
).union(
    CAG.circle({"center":[158.5240835,-93.6672565],"radius":2.5})
).union(
    CAG.circle({"center":[72.2945211,-120.0671156],"radius":2.5})
).union(
    CAG.circle({"center":[89.7375484,-72.1427919],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[237.3465765,-156.767616],"radius":1.5})
.union(
    CAG.circle({"center":[214.3799239,-93.6672565],"radius":1.5})
).union(
    CAG.circle({"center":[300.6094863,-120.0671156],"radius":1.5})
).union(
    CAG.circle({"center":[283.166459,-72.1427919],"radius":1.5})
).union(
    CAG.circle({"center":[135.5574309,-156.767616],"radius":1.5})
).union(
    CAG.circle({"center":[158.5240835,-93.6672565],"radius":1.5})
).union(
    CAG.circle({"center":[72.2945211,-120.0671156],"radius":1.5})
).union(
    CAG.circle({"center":[89.7375484,-72.1427919],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[49.5833626,-118.1418136],[74.4882644,-49.7161584]]).appendArc([76.7866422,-48.4445797],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.25726,-59.472194]).appendArc([128.5223076,-59.5484276],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.6945359,-68.3463993]).appendArc([152.9465763,-68.4583703],{"radius":2,"clockwise":true,"large":false}).appendPoint([183.4043542,-84.5898088]).appendArc([184.3476589,-87.0412633],{"radius":2,"clockwise":true,"large":false}).appendPoint([180.1058279,-98.695598]).appendArc([181.9852132,-101.3796382],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.9187942,-101.3796382]).appendArc([192.7981795,-98.695598],{"radius":2,"clockwise":false,"large":false}).appendPoint([188.5563486,-87.0412633]).appendArc([189.4996532,-84.5898089],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.9574311,-68.4583702]).appendArc([220.2094715,-68.3463992],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.3816998,-59.5484277]).appendArc([244.6467474,-59.472194],{"radius":2,"clockwise":true,"large":false}).appendPoint([296.1173652,-48.4445797]).appendArc([298.4157431,-49.7161584],{"radius":2,"clockwise":true,"large":false}).appendPoint([323.3206448,-118.1418136]).appendArc([322.6845109,-120.3924826],{"radius":2,"clockwise":true,"large":false}).appendPoint([294.3325022,-142.8921795]).appendArc([293.7982861,-143.1956493],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.5956813,-161.8504866]).appendArc([244.1074345,-162.1185504],{"radius":2,"clockwise":false,"large":false}).appendPoint([210.2535717,-187.4192687]).appendArc([207.7707142,-187.3493229],{"radius":2,"clockwise":true,"large":false}).appendPoint([190.3909611,-172.7659783]).appendArc([189.1053858,-172.2980672],{"radius":2,"clockwise":false,"large":false}).appendPoint([183.7986216,-172.2980672]).appendArc([182.5130463,-172.7659783],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.1332931,-187.3493229]).appendArc([162.6504357,-187.4192688],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.7965729,-162.1185504]).appendArc([128.3083261,-161.8504866],{"radius":2,"clockwise":false,"large":false}).appendPoint([79.1057213,-143.1956492]).appendArc([78.5715053,-142.8921795],{"radius":2,"clockwise":true,"large":false}).appendPoint([50.2194964,-120.3924826]).appendArc([49.5833626,-118.1418136],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlBoard_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[49.5833626,-118.1418136],[74.4882644,-49.7161584]]).appendArc([76.7866422,-48.4445797],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.25726,-59.472194]).appendArc([128.5223076,-59.5484276],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.6945359,-68.3463993]).appendArc([152.9465763,-68.4583703],{"radius":2,"clockwise":true,"large":false}).appendPoint([183.4043542,-84.5898088]).appendArc([184.3476589,-87.0412633],{"radius":2,"clockwise":true,"large":false}).appendPoint([180.1058279,-98.695598]).appendArc([181.9852132,-101.3796382],{"radius":2,"clockwise":false,"large":false}).appendPoint([190.9187942,-101.3796382]).appendArc([192.7981795,-98.695598],{"radius":2,"clockwise":false,"large":false}).appendPoint([188.5563486,-87.0412633]).appendArc([189.4996532,-84.5898089],{"radius":2,"clockwise":true,"large":false}).appendPoint([219.9574311,-68.4583702]).appendArc([220.2094715,-68.3463992],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.3816998,-59.5484277]).appendArc([244.6467474,-59.472194],{"radius":2,"clockwise":true,"large":false}).appendPoint([296.1173652,-48.4445797]).appendArc([298.4157431,-49.7161584],{"radius":2,"clockwise":true,"large":false}).appendPoint([323.3206448,-118.1418136]).appendArc([322.6845109,-120.3924826],{"radius":2,"clockwise":true,"large":false}).appendPoint([294.3325022,-142.8921795]).appendArc([293.7982861,-143.1956493],{"radius":2,"clockwise":true,"large":false}).appendPoint([244.5956813,-161.8504866]).appendArc([244.1074345,-162.1185504],{"radius":2,"clockwise":false,"large":false}).appendPoint([210.2535717,-187.4192687]).appendArc([207.7707142,-187.3493229],{"radius":2,"clockwise":true,"large":false}).appendPoint([190.3909611,-172.7659783]).appendArc([189.1053858,-172.2980672],{"radius":2,"clockwise":false,"large":false}).appendPoint([183.7986216,-172.2980672]).appendArc([182.5130463,-172.7659783],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.1332931,-187.3493229]).appendArc([162.6504357,-187.4192688],{"radius":2,"clockwise":true,"large":false}).appendPoint([128.7965729,-162.1185504]).appendArc([128.3083261,-161.8504866],{"radius":2,"clockwise":false,"large":false}).appendPoint([79.1057213,-143.1956492]).appendArc([78.5715053,-142.8921795],{"radius":2,"clockwise":true,"large":false}).appendPoint([50.2194964,-120.3924826]).appendArc([49.5833626,-118.1418136],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}


function board_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[52.1467882,-116.9464686],[75.6836094,-52.2795839]]).appendArc([77.9819872,-51.0080052],{"radius":2,"clockwise":true,"large":false}).appendPoint([129.452605,-62.0356195]).appendArc([129.7176526,-62.1118531],{"radius":2,"clockwise":true,"large":false}).appendPoint([150.1311103,-69.5417443]).appendArc([150.3831507,-69.6537153],{"radius":2,"clockwise":true,"large":false}).appendPoint([180.8409286,-85.7851538]).appendArc([181.7842333,-88.2366083],{"radius":2,"clockwise":true,"large":false}).appendPoint([177.5424023,-99.890943]).appendArc([179.4217876,-102.5749832],{"radius":2,"clockwise":false,"large":false}).appendPoint([193.4822198,-102.5749832]).appendArc([195.3616051,-99.890943],{"radius":2,"clockwise":false,"large":false}).appendPoint([191.1197742,-88.2366083]).appendArc([192.0630788,-85.7851539],{"radius":2,"clockwise":true,"large":false}).appendPoint([222.5208567,-69.6537152]).appendArc([222.7728971,-69.5417442],{"radius":2,"clockwise":true,"large":false}).appendPoint([243.1863548,-62.1118532]).appendArc([243.4514024,-62.0356195],{"radius":2,"clockwise":true,"large":false}).appendPoint([294.9220202,-51.0080052]).appendArc([297.2203981,-52.2795839],{"radius":2,"clockwise":true,"large":false}).appendPoint([320.7572192,-116.9464686]).appendArc([320.1210853,-119.1971376],{"radius":2,"clockwise":true,"large":false}).appendPoint([291.7604185,-141.7037054]).appendArc([291.2463607,-141.9994076],{"radius":2,"clockwise":true,"large":false}).appendPoint([241.7908819,-161.3636466]).appendArc([241.3363617,-161.6138915],{"radius":2,"clockwise":false,"large":false}).appendPoint([210.0039813,-184.6204596]).appendArc([207.5346922,-184.5404624],{"radius":2,"clockwise":true,"large":false}).appendPoint([193.2086252,-172.5194647]).appendArc([191.9230499,-172.0515536],{"radius":2,"clockwise":false,"large":false}).appendPoint([180.9809575,-172.0515536]).appendArc([179.6953822,-172.5194647],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.3693151,-184.5404623]).appendArc([162.9000261,-184.6204596],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.5676456,-161.6138915]).appendArc([131.1131255,-161.3636466],{"radius":2,"clockwise":false,"large":false}).appendPoint([81.6576467,-141.9994076]).appendArc([81.1435889,-141.7037054],{"radius":2,"clockwise":true,"large":false}).appendPoint([52.782922,-119.1971376]).appendArc([52.1467882,-116.9464686],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 5.6] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
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
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = xlBottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        