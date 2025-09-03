/// Slate Protocol Library
/// 
/// This is the main library crate for the Slate Protocol.

pub mod protocol;

pub use protocol::*;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}