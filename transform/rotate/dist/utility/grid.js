class Grid {
    static grid2(line1, line2, line_color = "#000000") {
        line1.draw(line_color);
        line2.draw(line_color);
    }
    static gridN(line, line_color = "#000000") {
        for (let count = 0; count < line.length; count++) {
            line[count].draw(line_color);
        }
    }
}
export { Grid };
