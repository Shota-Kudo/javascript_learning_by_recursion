function isMountain(height){
    //ここから書きましょう
    up_period = 0;
    down_period = 0;

    if(height.length >= 3) {
        for(i=0; i<height.length-1; i++) {
            if(height[i] < height[i+1]) {
                if(down_period == 1) {
                    return false;
                }
                up_period = 1;
            } else if(height[i] > height[i+1]) {
                if(up_period == 1) {
                    down_period = 1;
                } else if(up_period == 0) {
                    return false;
                }
            } else if(height[i] == height[i+1]) {
                return false;
            }
        }

        if(up_period == 1 && down_period == 1) {
            return true;
        }
    }
    return false;
}
