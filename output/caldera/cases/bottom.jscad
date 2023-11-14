function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[52.1467882,-116.9464686],[75.6836094,-52.2795839]]).appendArc([77.9819872,-51.0080052],{"radius":2,"clockwise":true,"large":false}).appendPoint([129.452605,-62.0356195]).appendArc([129.7176526,-62.1118531],{"radius":2,"clockwise":true,"large":false}).appendPoint([150.1311103,-69.5417443]).appendArc([150.3831507,-69.6537153],{"radius":2,"clockwise":true,"large":false}).appendPoint([180.8409286,-85.7851538]).appendArc([181.7842333,-88.2366083],{"radius":2,"clockwise":true,"large":false}).appendPoint([177.5424023,-99.890943]).appendArc([179.4217876,-102.5749832],{"radius":2,"clockwise":false,"large":false}).appendPoint([193.4822198,-102.5749832]).appendArc([195.3616051,-99.890943],{"radius":2,"clockwise":false,"large":false}).appendPoint([191.1197742,-88.2366083]).appendArc([192.0630788,-85.7851539],{"radius":2,"clockwise":true,"large":false}).appendPoint([222.5208567,-69.6537152]).appendArc([222.7728971,-69.5417442],{"radius":2,"clockwise":true,"large":false}).appendPoint([243.1863548,-62.1118532]).appendArc([243.4514024,-62.0356195],{"radius":2,"clockwise":true,"large":false}).appendPoint([294.9220202,-51.0080052]).appendArc([297.2203981,-52.2795839],{"radius":2,"clockwise":true,"large":false}).appendPoint([320.7572192,-116.9464686]).appendArc([320.1210853,-119.1971376],{"radius":2,"clockwise":true,"large":false}).appendPoint([291.7604185,-141.7037054]).appendArc([291.2463607,-141.9994076],{"radius":2,"clockwise":true,"large":false}).appendPoint([241.7908819,-161.3636466]).appendArc([241.3363617,-161.6138915],{"radius":2,"clockwise":false,"large":false}).appendPoint([210.0039813,-184.6204596]).appendArc([207.5346922,-184.5404624],{"radius":2,"clockwise":true,"large":false}).appendPoint([193.2086252,-172.5194647]).appendArc([191.9230499,-172.0515536],{"radius":2,"clockwise":false,"large":false}).appendPoint([180.9809575,-172.0515536]).appendArc([179.6953822,-172.5194647],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.3693151,-184.5404623]).appendArc([162.9000261,-184.6204596],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.5676456,-161.6138915]).appendArc([131.1131255,-161.3636466],{"radius":2,"clockwise":false,"large":false}).appendPoint([81.6576467,-141.9994076]).appendArc([81.1435889,-141.7037054],{"radius":2,"clockwise":true,"large":false}).appendPoint([52.782922,-119.1971376]).appendArc([52.1467882,-116.9464686],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        