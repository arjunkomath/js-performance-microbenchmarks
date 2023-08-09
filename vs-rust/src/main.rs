fn create_test_vec_of_size(size: usize) -> Vec<usize> {
    let mut vec = Vec::with_capacity(size);
    for i in 0..size {
        vec.push(i);
    }
    vec
}

fn main() {
    let vec = create_test_vec_of_size(100000000);

    let mut sum: usize = 0;
    for i in vec.iter() {
        sum += *i;
    }

    println!("sum: {}", sum);
}
